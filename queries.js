const Pool = require("pg").Pool;
const pool = new Pool({
  user: "bhvrbqdkswskil", //"postgres",
  host: "ec2-34-247-151-118.eu-west-1.compute.amazonaws.com", //"localhost",
  database: "d5ps87gq3edo1l", //"hajji",
  password: "12df2d0ffe0b091b10c4b9e2f3bbd991854729174a85b422a538a849f27caf77", //"0000",
  port: 5432, // 5433,
  ssl: {
    rejectUnauthorized: false,
  },
});

const getCrimesByWards = (request, response) => {
  pool.query(
    "select ward,count(ward) from crime  group by ward",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getRandomQuery = (request, response) => {
  pool.query(request.body.req, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
};

const getRandom = (request, response) => {
  pool.query(request.params.x, (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
};

/*
const getCrimesByStreet=(req,res)=>{
    pool.query( '        '   ), (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}*/

module.exports = {
  getCrimesByWards,
  getRandomQuery,
  getRandom,
};
