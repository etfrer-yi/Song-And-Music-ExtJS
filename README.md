# Song-And-Music-ExtJS

This is part of the Song And Music project. This repository contains the file for displaying the songs to the UI.

To use this file, 
1. Generate a Sencha ExtJS project through `sencha generate app -ext MyApp /path/to/my-app` (see https://docs.sencha.com/cmd/guides/extjs/cmd_app.html)
2. Replace the `app` folder that is created with the current `app` folder (the current `app` folder is understood as all the files within this repository).
3. Run `sencha app build` once
4. Everytime you wish to start the application, run `sencha app watch`
5. Navigate to http://localhost:1841/ for the display of songs. 


============================================================================================

Final product looks like this (the result of a GET request for all records):
![image](https://user-images.githubusercontent.com/77317763/131039014-e061c201-5000-4da8-a592-e160e5758d90.png)

Clicking on 'Add New Record' generates a form that allows you to CREATE a new record in the database:
![image](https://user-images.githubusercontent.com/77317763/131038289-1f4e6890-1fac-4933-a0df-03b7aad08782.png)

Clicking on any of the existing records generates a form filled out with the details of that record. It is then possible to UPDATE that record:
![image](https://user-images.githubusercontent.com/77317763/131038393-59609617-8229-4399-9c4c-c671ee71a741.png)

Clicking on any of the checkboxes on the rightmost column will DELETE that record.

All basic CRUD endpoints are done in NestJS (the associated SongAndMusic NestJS repository at https://github.com/etfrer-yi/Song-And-Music-NestJS-). The UI is accomplished through ExtJS (this repository).
