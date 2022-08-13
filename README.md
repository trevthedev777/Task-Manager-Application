## Technologies Used

- Gitpod
- Flask-SQLAlchemy
- psycopg2
- Materialize Css

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
- The child template inherits HTML code from the parent template. This follows the philosphy of 'DRY' - `Don't Repeat Yourself` as templating helps avoid duplication

How do you use it?
- You use jinja blocks to inject content
```
{% block content %}
*Insert content here*
{% endblock %}
```

We will be using the `Materialize Css`

- Navigate to [Materialize css: Getting Started](https://materializecss.com/getting-started.html) and grab the cdn & paste it into the `<head></head>`
```
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

- Then paste the Javascript cdn at the bottom of the `html` document

```
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

## CREATE New Category Function to DB using Python

-   WHAT IS IT?
    - A button called Add Category and function called add_category().

- WHAT DOES IT DO?

    - When a user clicks the Add Category button, the add_category() function will run. This function will provide the user with a form to save a new category to the database.

- HOW DO YOU USE IT?
    - You create your add_category() function in the routes.py and wire this up to your Add Category button.

This is really easy to do and we need to create them creating `add_category.html` and `categories.html`

### add_category.html Routes and File Structure

### categories.html Routes and File Structure

To add our new Category, we need to 

### Including our owned JS and CSS files

We need to use the `{{ url_for }}` method when adding directories to our owned style and script files, they are not needed for `cdn` links

When using the `Flask` library, we need to create a `static` folder in our created `module` which in this tutorial is called `taskmanager`

In our `static` folder we created our directories to `css` and `js`, then we need to import them to our `base.html` like this:

```
<!-- CSS -->
<link rel="stylesheet" href="{{ url_for('static', filename='css/style.css')}}" type="text/css">

<!-- JavaScript -->
<script src="{{ url_for('static', filename='js/script.js') }}" type="text/js"></script>
```

This helps avoid bugs when directing our site to our needed paths

## Viewing Categories - READ from Database

- WHAT IS IT?
    - A template called Categories and a function called categories().

- WHAT DOES IT DO?
    - Allows users to query the database and view all categories.

- HOW DO YOU USE IT?
    - Clicking on the navbar link for Categories will execute the function, and retrieve a list of all categories to display to the user on the front-end

## UPDATING Categories

- WHAT IS IT?
    - A button called 'Edit' and a function called edit_category().

- WHAT DOES IT DO?
    - When a user clicks the 'Edit' button on the form, the edit_category() function will run. This will update the Category text in the Database.

- HOW DO YOU USE IT?
    - You create your edit_category() function in routes.py and wire this up to your Edit button.
    

<!-- FINISH DOCUMENTATION, rewatch and add notes for this here-->

## Deleting Categories

- WHAT IS IT?
    - A button called 'Delete' and a function called delete_category().

- WHAT DOES IT DO?
    - When a user clicks the 'Delete' button, the delete_category() function will run, which will delete the category from the database.
    
- HOW DO YOU USE IT?
    - You create your delete_category() function in routes.py and wire this up to your 'Delete' button on the front-end template.


Deleting a category does nit require a `.html` and is all done through the backend `routes.py` file.

1) Create a route and and create a function that will parse the`<int:category_id>` into our directory that is parsed as the argument, this is to let us make changes or delete the task that we select
```
@app.route("delete_category/<int:category_id></int:category.id>")
def delete_category(category_id):
```

2) We should attempt to query the category table by using this `id`, if there isn's a id found then it should automatically return a 404 page
```
@app.route("delete_category/<int:category_id></int:category.id>")
def delete_category(category_id):
    category - Category.query.get_or_404(category_id)
```

3) using the db session, we need to use the `delete` method to remove this query from our `db` and then commit the session
```
@app.route("delete_category/<int:category_id></int:category.id>")
def delete_category(category_id):
    category - Category.query.get_or_404(category_id)
    db.session.delete(category)
    db.session.commit()
```

4) Once that has been deleted and the changes committed to our `db`, we can redirect our user back to the directory of `categories`
```
@app.route("delete_category/<int:category_id></int:category.id>")
def delete_category(category_id):
    category = Category.query.get_or_404(category_id)
    db.session.delete(category)
    db.session.commit()
    return redirect(url_for("categories"))
```

5) Last step, update the `href` link from the `categories` template
```
<div class="card-action">
          <a href="{{ url_for('edit_category', category_id=category.id) }}" class="btn green accent-4">Edit</a>
          <a href="{{ url_for('delete_category', category_id=category.id) }}" class="btn red">Delete</a>
</div>
```
Add defensive programming on your delete function euther using validations or modals

## Adding Tasks

Matches the form fields, form.get is each input 
matches the models schema
<!-- REWATCH AND ADD TO DOCUMENTATION -->

## Viewing Tasks

- WHAT IS IT?
    - A front-end template to allow users to view Tasks from the database.

- WHAT DOES IT DO?
    - Displays relevant details from the database about each recorded task.

- HOW DO YOU USE IT?
    - By updating the main function for the home page, we can extract all tasks, and iterate over them for display purposes.

<!-- REWATCH AND ADD TO DOCUMENTATION -->

## Updating Tasks

- WHAT IS IT?
    - A button called Edit task and a function called edit_task().

- WHAT DOES IT DO?
    - When a user clicks the Edit task button, the edit_task() will run. This function will provide the user with a form to edit the task

- HOW DO YOU USE IT?
    - You create your edit_task() function in routes.py and wire this up to your Edit task button.

<!-- REWATCH AND ADD TO DOCUMENTATION -->

## Deleting Tasks

- WHAT IS IT?
    - Delete task button.

- WHAT DOES IT DO?
    - It allows a user to delete a task from the database.

- HOW DO YOU USE IT?
    - By sending a HTTP post request to the database to delete the specified task.

Add defensive programming so that a user must first verify they want to commit to the deletion

Remember that when using cascade with our relational db, that it will delete all the associated tasks created in that category, it is a good idea to include thise warning in the user authentication and defensive programming warning

<!-- REWATCH AND ADD TO DOCUMENTATION -->

# 12 - Deploying Our Project to Heroku

---

### Check which Python packages are currently installed in our workspace
- `pip3 list`

### Freeze the current Python packages into a `requirements.txt` file
- `pip3 freeze --local > requirements.txt`

### Create the `Procfile` required for Heroku
- `echo web: python run.py > Procfile`

### Heroku: Postgres Add-On
- From the **Resources** tab on Heroku, search for `heroku postgres` within the **Add-Ons** section.
- Select the `Hobby Dev - Free` option, and submit.
- From the **Settings** tab on Heroku, and click "Reveal Conig Vars"
- Add the remaining environment variables hidden within our `env.py` to the Heroku config vars:
    - `DATABASE_URL`: comes with the **postgres add-on** above
    - `IP`: `0.0.0.0`
    - `PORT`: `5000`
    - `SECRET_KEY`: `any_secret_key`
    - `DEBUG`: `True` (*only during development*)
    - ~~`DEVELOPMENT`~~: **DO NOT INCLUDE ON HEROKU**
    - ~~`DB_URL`~~: **DO NOT INCLUDE ON HEROKU**
- From the **Deploy** tab on Heroku, these next steps are for Automatic Deploys using GitHub:
    - Select **GitHub** for the deployment method.
    - Ensure your GitHub profile name is listed, and then input your repository name.
    - Once Heroku sees your repository, click "Connect".
    - Select the appropriate branch to deploy from (usually `main` or `master`).
    - Click "Enable Automatic Deploys".
    - Click "Deploy Branch". (*can take a few minutes to build*)
- Once the app successfully builds, go back to the **Settings** tab.
- Click "Reveal Config Vars".
- If the `DATABASE_URL` starts with `postgres://` instead of `postgresql://`, then follow these steps:
    - Open the `__init__.py` file.
    - `import re` at the top.
    - Within the `else:` statement, replace the code with the following:
        - ```python
          else:
              uri = os.environ.get("DATABASE_URL")
              if uri.startswith("postgres://"):
                  uri = uri.replace("postgres://", "postgresql://", 1)
              app.config["SQLALCHEMY_DATABASE_URI"] = uri
          ```
    - Commit all changes to GitHub.
- From the **Activity** tab on Heroku, make sure the build completes with those changes.
- Click the **More** dropdown in the top-right corner of Heroku.
- Select "Run Console", and follow these steps in the console:
    - `python3`
    - `from taskmanager import db`
    - `db.create_all()`
    - `exit()`
- Everything should be connected and working now, so click the **Open App** button.
## Credits

- Materialize css (https://materializecss.com/getting-started.html)