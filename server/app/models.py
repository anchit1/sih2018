from app import db

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  first_name = db.Column(db.String(25))
  last_name = db.Column(db.String(25))
  email = db.Column(db.String(64))
  password_hash = db.Column(db.String(128))

  def __repr__(self):
    return 'User: {}'.format(self.email)