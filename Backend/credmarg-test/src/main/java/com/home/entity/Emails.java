package com.home.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Emails {
	
	@Id @GeneratedValue
	private Integer id = 1000;
	
	private List<String> emails;
	
	public Emails(List<String> emails) {
		this.emails = emails;
		this.id++;
	}
}
