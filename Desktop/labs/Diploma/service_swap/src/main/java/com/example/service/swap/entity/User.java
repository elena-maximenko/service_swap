package com.example.service.swap.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Objects;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString(exclude = "services")
@EqualsAndHashCode(exclude = "services")
@Table(name = "user")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "login", unique = true)
    private String login;

    @Column(name = "first_name")
    @Size(min = 2, max = 255)
    private String firstName;

    @Column(name = "last_name")
    @Size(min = 2, max = 255)
    private String lastName;

    @Column(name = "password")
    private String password;

    @ManyToMany//(cascade = { CascadeType.ALL })
    @JoinTable(name = "user_service", joinColumns = {
            @JoinColumn(name = "user_id")
    }, inverseJoinColumns = {
            @JoinColumn(name = "service_id")
    })
    private Set<Service> services;

    public User(String login, String firstName, String lastName, String password, Set<Service> services) {
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.services = services;
    }
}