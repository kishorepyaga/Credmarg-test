package com.home.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.home.entity.Emails;

public interface EmailsRepository extends JpaRepository<Emails, Double> {

}
