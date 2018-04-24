package com.example.service_swap.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name="category")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
class Category {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name", unique = true)
    private String name;

    @OneToMany(mappedBy = "category")
    private Set<Service> services;
}