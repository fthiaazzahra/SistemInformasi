const {registerHandler, readAllPasien, updatePasienById} = require('./handler-pasien');

const routes = [
    {
        method: 'POST',
        path: '/register',
        handler: registerHandler,
      },
      {
        method: 'GET',
        path: '/register',
        handler: (request, h) => h.view('register'),
      },
      {
        method: 'GET',
        path: '/ReadPasien',
        handler: readAllPasien,
      },
      {
        method: 'PUT',
        path: '/UpdatePasien',
        handler: updatePasienById,
      },
    ];
    module.exports = routes;