const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const { json } = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "opticsDb",
  password: "admin",
});

app.get("/getData",  (req, res) => {

  if (req.query.hasOwnProperty('name')) {
    const name = req.query.name;
    let sql = `SELECT * FROM opticsdata WHERE name LIKE "${name}%"`;
    db.query(sql, (err, result) => {
      if (err) return res.status(400).json({ error: err });

      return res.status(200).json(result);
    });
  }

   else if(req.query.hasOwnProperty('serial')){
    const serial = req.query.serial;
    let sql = `SELECT * FROM opticsdata WHERE srNo = "${serial}"`;

    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ error: err });
  
        return res.status(200).json(result);
      });
  }
else{
  return res.json({error:"syntax error"});}
});

app.post("/postData", (req, res) => {
  const data = req.body;
  const oDate = data.oDate === null ? `${data.oDate}` : `"${data.oDate}"`;
  const dDate = data.dDate === null ? `${data.dDate}` : `"${data.dDate}"`;
  const columns = "name, contactNo, srNo, oDate, dDate, frame, amount, advance, balance, a, b, c, d, e, f, g, h , i, j, k, l, m, n, o, p, q";
  const values = `"${data.name}", "${data.contactNo}", "${data.srNo}", ${oDate}, ${dDate}, "${data.frame}", ${data.amount}, ${data.advance}, ${data.balance}, "${data.a}", "${data.b}", "${data.c}", "${data.d}", "${data.e}", "${data.f}", "${data.g}", "${data.h}", "${data.i}", "${data.j}", "${data.k}", "${data.l}", "${data.m}", "${data.n}", "${data.o}", "${data.p}", "${data.q}"`;
  let sql = `INSERT INTO opticsdata (${columns}) VALUES (${values})`;

  db.query(sql, (err, result) => {
    if (err) return res.json({ error: err });

    console.log(result);
    return res.json(data);
  });
});

app.delete("/deleteItem", (req, res) =>{
    if(req.query.hasOwnProperty("id")){
        const id = req.query.id;
        let sql = `DELETE FROM opticsdata WHERE id = ${id}`;
        db.query(sql, (err, result)=>{
            if(err) return res.status(400).json({error:err})

            return res.status(200).json({deletedData:"successfull"});
        })
    }
})

app.listen(8000, () => {
  console.log("listening");
});
