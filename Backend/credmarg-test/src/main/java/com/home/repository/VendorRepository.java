package com.home.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.home.entity.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {

}
