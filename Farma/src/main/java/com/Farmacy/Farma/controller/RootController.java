package com.Farmacy.Farma.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class RootController {

    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> index() {
        return ResponseEntity.ok(Map.of(
                "application", "Pharmacy Management System Backend (Farma)",
                "status", "UP",
                "healthEndpoint", "/api/v1/auth/health",
                "frontendUrl", "http://localhost:5173",
                "message", "Backend funcionando correctamente. Acceda a la interfaz web en http://localhost:5173 o http://localhost"
        ));
    }
}
