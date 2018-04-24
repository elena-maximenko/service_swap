package com.example.service_swap.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name="service")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class Service {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", unique = true)
    private String name;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @ManyToMany(mappedBy = "services")
    private Set<User> users;
}