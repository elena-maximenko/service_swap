package com.example.service.swap.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Data
@Entity
@Table(name="category")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(exclude = "services")
@ToString(exclude = "services")
class Category {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name", unique = true)
    private String name;

 /*   @OneToMany(mappedBy = "category")
    private Set<Service> services;
*/
}