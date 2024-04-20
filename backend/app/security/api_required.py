import functools

from flask import jsonify, make_response, request


from hmac import compare_digest

from app.models import Device

def is_valid(api_key):
    device = Device.find_by_api_key(api_key)
    if device and compare_digest(device.api_key, api_key):
        return True



def api_required(func):
    @functools.wraps(func)
    def decorator(*args, **kwargs):
        if not request.headers.get('api-key'):
            return jsonify({"error" : "need to provid a api key"}), 403
        else :
            api_key = request.headers.get('api-key')
        if is_valid(api_key):
            return func(*args, **kwargs)
        else :
            return jsonify({"error": "invalid api key"}), 403
    return decorator