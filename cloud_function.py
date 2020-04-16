import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime


def hello_world(request):
    request_json = request.get_json()
    print(request_json)

    json_key_file = {
        ...
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/covid-19%40cornell-tech-sso.iam.gserviceaccount.com"
    }

    # use creds to create a client to interact with the Google Drive API
    scope = ['https://spreadsheets.google.com/feeds',
             'https://www.googleapis.com/auth/drive']
    creds = ServiceAccountCredentials.from_json_keyfile_dict(
        json_key_file, scope)
    client = gspread.authorize(creds)

    # url = 'https://docs.google.com/spreadsheets/d/1DywjvkA2dwBPriqXkBjMNY-iob7CjPJPuhCq7xHXA3k/edit#gid=0'
    #sheet = client.open_by_url('https://docs.google.com/spreadsheet/ccc?key=0Bm...FE&hl').sheet1
    sheet = client.open("COVID-19 Test Google Function").sheet1
    row = [datetime.now().strftime("%d/%m/%Y %H:%M:%S"), "this is a test!"]
    sheet.append_row(row)

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':  'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST'}

    return ("done", 200, headers)
