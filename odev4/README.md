hi there is this project patika community of praticing app
this project old version of react 16 
first of all you must update to node module for this reason pls write
 npm i 

then first issue have come.
in this project they dont dowland react testing liblary so we need install it
npm i @testing-library/react

but there other problem comes last version testing library is not supported to react 16 version we are using right know react 18 so then we need find a sync version 
npm i @testing-library/react@12

then wee need instal to other libs

npm i @testing-library/user-event@12
npm i @testing-library/jest-dom@5

then maybe can give you observation error i find solutution in this site 
https://github.com/testing-library/dom-testing-library/issues/477#issuecomment-598606649

yarn mean npm

have a good day.

