import firebase_admin
from firebase_admin import credentials, auth
import os 


sdk = {
    "type": "service_account",
    "project_id": "portofilio-4f56d",
    "private_key_id": "462b38c957ec8ba75dbfbc4d4232faaa64d220b3",
    "private_key": os.getenv("FIREBASE_P_K"),
    "client_email": "firebase-adminsdk-4oojt@portofilio-4f56d.iam.gserviceaccount.com",
    "client_id": "108272178769970313303",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4oojt%40portofilio-4f56d.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

cred = credentials.Certificate(sdk)
firebase_admin.initialize_app(cred)


