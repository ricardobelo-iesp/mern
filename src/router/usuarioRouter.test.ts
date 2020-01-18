import supertest from "supertest";
import mockingoose from "mockingoose";
import app from "../server";
import { UsuarioModel } from "../model/usuarios";

test("[GET] /usuarios", async () => {
    const mockusuarios = [{
        _id: "123",
        username: "Ricardo",
        password: "Belo"
    }];
    mockingoose(UsuarioModel).toReturn(mockusuarios, "find");
    const response = await supertest(app).get("/usuarios");
    expect(response.text).toBe(JSON.stringify(mockusuarios))
});

test("[POST] /usuarios", async () => {
    const mockusuarios = [{
        _id: "123",
        username: "Ricardo",
        password: "Belo"
    }];
    mockingoose(UsuarioModel).toReturn(mockusuarios, "find");
    const response = await supertest(app).post("/usuarios");
    expect(response.text).toBe(JSON.stringify(mockusuarios))
});

test("[PUT] /usuarios", async () => {
    const mockusuarios = [{
        _id: "123",
        username: "Ricardo",
        password: "Belo"
    }];
    mockingoose(UsuarioModel).toReturn(mockusuarios, "find");
    const response = await supertest(app).put("/usuarios");
    expect(response.text).toBe(JSON.stringify(mockusuarios))
});