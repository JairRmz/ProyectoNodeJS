const express = require('express');
const empleados = express.Router();
const db = require("../database/database");

empleados.post("/add", async (req, res, next) => {
    const { emp_name, emp_surnames, emp_phone, emp_mail, emp_address } = req.body;

    if (emp_name && emp_surnames && emp_phone_number && emp_mail && emp_address) {
        const query = "INSERT INTO  empleados (emp_name, emp_surnames, emp_phone, emp_mail, emp_address) ";
        query += ` VALUES ('${emp_name}', '${emp_surnames}', ${emp_phone}, '${emp_mail}', '${emp_address}')`;
        const rows = await db.query(query);
    
        if (rows.affectedRows == 1) {
            return res.status(201).json({code: 201, message: "empleado insertado correctamente"});
        }
    
        return res.status(500).json({code: 500, message: "ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "campos incompletos"});
} );

empleados.delete("/delete", async (req, res, next) => {
    const { emp_id } = req.body;
    const query = `DELETE FROM empleados where emp_id=${emp_id}`;
    const rows = await db.query(query);

    if(affectedRows == 1) {
        return res.status(200).json({code: 200, message: "empleado borrado correctamente" });    
    }

    return res.status(404).json({code: 404, message: "empleado no encontrado" });  
} );

empleados.put("/update", async (req, res, next) => {
    const { emp_id, emp_name, emp_surnames, emp_phone, emp_mail, emp_address } = req.body;

    if (emp_id && emp_name && emp_surnames && emp_phone && emp_mail && emp_address) {
        let query = `UPDATE empleados SET emp_name='${emp_name}', emp_surnames='${emp_surnames}', `;
        query += `emp_phone=${emp_phone}, emp_mail='${emp_mail}', emp_address='${emp_address}' WHERE emp_id=${emp_id};`;
        
        const rows = await db.query(query);
    
        if (rows.affectedRows == 1) {
            return res.status(200).json({code: 200, message: "empleado actualizado correctamente"});
        }
    
        return res.status(500).json({code: 500, message: "ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "campos incompletos"});
} );

empleados.get("/getall", async (req, res, next) => {
    const employee = await db.query("SELECT * FROM empleados");
    return res.status(200).json({code: 200, message: employee});
} );

empleados.get("/get", async (req, res, next) => {
    const { emp_name } = req.body;
    const employee = await db.query(`SELECT * FROM empleados WHERE emp_name ='${emp_name}';`);
    if (employee.length > 0) {
        return res.status(200).json({code: 200, message: employee});
    }
    return res.status(404).json({code: 404, message: "empleado no encontrado"});
} );

module.exports = empleados;