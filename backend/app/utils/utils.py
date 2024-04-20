from app.constants import DEBUG

def k_debug(msg: str) -> None:
    if DEBUG : print(msg)