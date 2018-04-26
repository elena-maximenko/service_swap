package com.example.service.swap.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Data
@Entity
@Table(name="service")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(exclude = {"category", "users"})
@ToString(exclude = {"users", "category"})
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

  /*  @ManyToMany(mappedBy = "services")
    private Set<User> users;
*/
}