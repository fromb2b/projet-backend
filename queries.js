const Pool = require("pg").Pool;
const pool = new Pool({
  user: "rjuwzidffvylwq", //"postgres",
  host: "ec2-54-220-243-77.eu-west-1.compute.amazonaws.com", //"localhost",
  database: "d4e0m7fdo34ek2", //"hajji",
  password: "684675d60f6659b1fec6dce5a19febd55cdf52576f8948a1f10dd0ab1f388d5f", //"0000",
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
  //getRandom,
};
