import firebase_admin
from firebase_admin import credentials, auth
cred = credentials.Certificate(r"D:\projects\portfolio\backend\app\configs\firebase.json")
firebase_admin.initialize_app(cred)
auth = auth

