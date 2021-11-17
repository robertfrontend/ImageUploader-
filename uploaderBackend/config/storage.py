import pyrebase

firebaseConfig = {
    "apiKey": "AIzaSyA0EpGpY5Nu_SjAhipPpPASC1P6xzEPdk8",
    "authDomain": "uploaderimage-d4a8a.firebaseapp.com",
    "projectId": "uploaderimage-d4a8a",
    "storageBucket": "uploaderimage-d4a8a.appspot.com",
    "messagingSenderId": "49162495341",
    "appId": "1:49162495341:web:bf8f6a8bfdff6506ad6664",
    "measurementId": "G-XCG2X1LSFJ",
    "databaseURL": ""
}

firebase = pyrebase.initialize_app(firebaseConfig)


STORAGE = firebase.storage()
