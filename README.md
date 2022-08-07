## Technologies Used

- Gitpod
- Flask-SQLAlchemy
- psycopg2

## 

This application is used to store sensitive information and it is very crucial to store this information on a `env.py` file and include this on your `.gitignore`

```
touch env.py
```

## Creating the Database

### Migrate Your DB from Python

open your Python interpreter `python3`

- >>> from taskmanager import db
- >>> db.create_all()
- >>> exit() 

## Template Inheritence

What is it?
- parent and Child HTML templates

What does it do?
- The child template inherits HTML code from the parent template. This follows the philosphy of 'DRY' - Don't Repeat Yourself as templating helps avoid duplication

How do you use it?
- You use jinja blocks to inject content
```
{% block content %}
*Insert content here*
{% endblock %}
```