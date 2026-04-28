import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_all_books(client):
    response = client.get('/books')
    assert response.status_code == 200
    assert len(response.json) == 3

def test_get_single_book(client):
    response = client.get('/books/3')
    assert response.status_code == 200
    assert response.json['title'] == "Dune"

def test_get_book_not_found(client):
    response = client.get('/books/999')
    assert response.status_code == 404