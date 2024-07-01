Command-Shift-. to regenerate laravel helper file for PHPStorm.


https://ashe_laravelbootcamp.lndo.site/

(git co 1_breeze)

lando composer require laravel/breeze --dev

lando artisan breeze:install blade

lando npm install

lando npm run dev

https://ashe_laravelbootcamp.lndo.site/
and register an account.
Show user sin SqLite DB database/database.sqlite

Show vite.
https://ashe_laravelbootcamp.lndo.site/register
Look up register route - explain how routes and named routes work.
routes/web.php - includes routes/auth.php
register points to [RegisteredUserController::class, 'create']
which shows    return view('auth.register');
routes/auth/register.blade.php
Add some random text and show the vite hot module reloading working.
This is NOT page reload like BrowserSync. Lando also supports browsersync too.


Show dashboard after logged in.
Can show routes/views and how to look them up.
