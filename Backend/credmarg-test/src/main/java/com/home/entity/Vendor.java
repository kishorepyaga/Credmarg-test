package com.home.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vendor {

	@Id @GeneratedValue
	private Integer id;
	@NotNull
	private String name;
	@NotNull @Column(unique = true) @Email
	private String email;
	@NotNull @Column(unique = true)
	private String upi;
	
}
