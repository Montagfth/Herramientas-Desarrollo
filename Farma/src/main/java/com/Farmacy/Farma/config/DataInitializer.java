package com.Farmacy.Farma.config;

import com.Farmacy.Farma.entity.Role;
import com.Farmacy.Farma.entity.User;
import com.Farmacy.Farma.repository.RoleRepository;
import com.Farmacy.Farma.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner init(RoleRepository roleRepo, UserRepository userRepo, PasswordEncoder encoder) {
        return args -> {
            Role adminRole = roleRepo.findByName("ROLE_ADMIN")
                    .orElseGet(() -> roleRepo.save(new Role("ROLE_ADMIN")));

            if (userRepo.findByUsername("admin").isEmpty()) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setEmail("admin@farmacia.com");
                admin.setPassword(encoder.encode("Password123!"));
                admin.setEnabled(true);
                admin.setRoles(Set.of(adminRole));
                userRepo.save(admin);
                System.out.println(">> Usuario admin creado: admin / Password123!");
            }
        };
    }
}
