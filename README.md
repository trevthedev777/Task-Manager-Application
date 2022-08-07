## Technologies Used

- Gitpod
- Flask-SQLAlchemy
- psycopg2

## 

This application is used to store sensitive information and it is very crucial to store this information on a `env.py` file and include this on your `.gitignore`

```
touch env.py
```

## Migrate Your DB from Python

open your Python interpreter `python3`

- >>> from taskmanager import db
- >>> db.create_all()
- >>> exit() 