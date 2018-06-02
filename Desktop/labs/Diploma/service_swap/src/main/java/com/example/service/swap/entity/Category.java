package com.example.service.swap.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;


@Data
@Entity
@Table(name="category")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Category {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name", unique = true)
    private String name;

    public Category(String name){
        this.name = name;
    }

 /*   @OneToMany(mappedBy = "category")
    private Set<Service> services;
*/
}