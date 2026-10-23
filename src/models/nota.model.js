import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("nombre_bd", "usuario", "contraseña", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

export const Nota = sequelize.define(
    "Nota",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contenido: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["clase", "tarea", "idea"]],
            },
        },
    },
    {
        timestamps: true,
        tableName: "notas",
    },
);
