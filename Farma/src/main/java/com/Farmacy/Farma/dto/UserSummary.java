package com.Farmacy.Farma.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Set;

@Data
@AllArgsConstructor
public class UserSummary {
    private Long id;
    private String username;
    private String email;
    private Set<String> roles;
    private boolean enabled;
}
