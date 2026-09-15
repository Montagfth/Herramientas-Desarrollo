package com.Farmacy.Farma.controller;

import com.Farmacy.Farma.dto.UserSummary;
import com.Farmacy.Farma.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/lobby")
public class LobbyController {

    @GetMapping("/summary")
    public ResponseEntity<UserSummary> summary(@AuthenticationPrincipal User user) {
        if (user == null) return ResponseEntity.status(401).build();
        UserSummary dto = new UserSummary(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRoles().stream().map(r -> r.getName()).collect(Collectors.toSet()),
                user.isEnabled()
        );
        return ResponseEntity.ok(dto);
    }
}
