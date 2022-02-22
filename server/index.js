const express = require("express");
const app = express();
const ExcelJS = require("exceljs");
const mysql = require("mysql2");
const cors = require("cors");
const { json } = require("express");
const fs = require("fs");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "opticsDb",
  password: "admin",
});

app.get("/years", (req, res) => {
  let sql = "SELECT DISTINCT YEAR(insertionDate) AS year FROM opticsdata";

  db.query(sql, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    else return res.status(200).json(result);
  });
});

app.get("/revenue", (req, res) => {
  if (req.query.hasOwnProperty("year")) {
    const year = req.query.year;
    let sql = `SELECT amount, YEAR(insertionDate) AS year, MONTH(insertionDate) AS month FROM opticsdata where YEAR(insertionDate) = ${year} `;
    db.query(sql, (err, result) => {
      if (err) return res.status(400).json({ error: err });
      else return res.status(200).json(result);
    });
  }
});

app.get("/revenueByMonth/:year?", (req, res) => {
  if (req.query.hasOwnProperty("month")) {
    const year = req.params.year;
    const month = req.query.month;
    let sql = `SELECT * from opticsdata where YEAR(insertionDate) = ${year} AND MONTH(insertionDate) = ${month}`;

    db.query(sql, (err, result) => {
      if (err) return res.status(400).json({ error: err });
      else return res.status(200).json(result);
    });
  }
});

app.get("/getData", (req, res) => {
  if (req.query.hasOwnProperty("name")) {
    const name = req.query.name;
    let sql = `SELECT * FROM opticsdata WHERE name LIKE "${name}%"`;
    db.query(sql, (err, result) => {
      if (err) return res.status(400).json({ error: err });

      return res.status(200).json(result);
    });
  } else if (req.query.hasOwnProperty("serial")) {
    const serial = req.query.serial;
    let sql = `SELECT * FROM opticsdata WHERE srNo = "${serial}"`;

    db.query(sql, (err, result) => {
      if (err) return res.status(400).json({ error: err });

      return res.status(200).json(result);
    });
  } else {
    return res.json({ error: "syntax error" });
  }
});

app.post("/postData", (req, res) => {
  const data = req.body;
  const oDate = data.oDate === null ? `${data.oDate}` : `"${data.oDate}"`;
  const dDate = data.dDate === null ? `${data.dDate}` : `"${data.dDate}"`;

  const insertionDate = new Date();
  const temp = insertionDate.getFullYear() + "/" + (insertionDate.getMonth() + 1) + "/" + insertionDate.getDate();

  const columns =
    "insertionDate, name, contactNo, srNo, oDate, dDate, frame, amount, advance, balance, a, b, c, d, e, f, g, h , i, j, k, l, m, n, o, p, q";
  const values = `"${temp}","${data.name}", "${data.contactNo}", "${data.srNo}", ${oDate}, ${dDate}, "${data.frame}", ${data.amount}, ${data.advance}, ${data.balance}, "${data.a}", "${data.b}", "${data.c}", "${data.d}", "${data.e}", "${data.f}", "${data.g}", "${data.h}", "${data.i}", "${data.j}", "${data.k}", "${data.l}", "${data.m}", "${data.n}", "${data.o}", "${data.p}", "${data.q}"`;
  let sql = `INSERT INTO opticsdata (${columns}) VALUES (${values})`;

  db.query(sql, (err, result) => {
    if (err) return res.json({ error: err });

    PostToExcel({ ...data, insertionDate: temp });
    return res.json(data);
  });
});
app.delete("/deleteItem", (req, res) => {
  if (req.query.hasOwnProperty("id")) {
    const id = req.query.id;
    let sql = `DELETE FROM opticsdata WHERE id = ${id}`;
    db.query(sql, (err, result) => {
      if (err) return res.status(400).json({ error: err });

      return res.status(200).json({ deletedData: "successfull" });
    });
  }
});

const PostToExcel = async (data) => {
  const workbook = new ExcelJS.Workbook();
  file_descriptor = fs.openSync("userTemp.xlsx");
  console.log("The file descriptor is:", file_descriptor);

  fs.close(file_descriptor, (err) => {
    if (err) console.error("Failed to close file", err);
    else {
      workbook.xlsx.readFile("userTemp.xlsx").then((res) => {
        const workSheet = workbook.getWorksheet("My Users");
        const columns = [
          { header: "insertionDate,", key: "insertionDate" },
          { header: "name", key: "name" },
          { header: "contactNo", key: "contactNo" },
          { header: "srNo", key: "srNo" },
          { header: "oDate", key: "oDate" },
          { header: "dDate", key: "dDate" },
          { header: "frame", key: "frame" },
          { header: "amount", key: "amount" },
          { header: "advance", key: "advance" },
          { header: "balance", key: "balance" },
          { header: "a", key: "a" },
          { header: "b", key: "b" },
          { header: "c", key: "c" },
          { header: "d", key: "d" },
          { header: "e", key: "e" },
          { header: "f", key: "f" },
          { header: "g", key: "g" },
          { header: "h", key: "h" },
          { header: "i", key: "i" },
          { header: "j", key: "j" },
          { header: "k", key: "k" },
          { header: "l", key: "l" },
          { header: "m", key: "m" },
          { header: "n", key: "n" },
          { header: "o", key: "o" },
          { header: "p", key: "p" },
          { header: "q", key: "q" },
        ];
        workSheet.columns = columns;

        const tempData = [
          data.insertionDate,
          data.name,
          data.contactNo,
          data.srNo,
          data.oDate,
          data.dDate,
          data.frame,
          data.amount,
          data.advance,
          data.balance,
          data.a,
          data.b,
          data.c,
          data.d,
          data.e,
          data.f,
          data.g,
          data.h,
          data.i,
          data.j,
          data.k,
          data.l,
          data.m,
          data.n,
          data.o,
          data.p,
          data.q,
        ];

        workSheet.addRow(tempData);

        workbook.xlsx.writeFile("userTemp.xlsx");
      });
    }
  });
};

app.listen(8000, () => {
  console.log("listening");
});
