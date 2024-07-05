package com.home.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.home.entity.Emails;
import com.home.entity.Employee;
import com.home.entity.Vendor;
import com.home.repository.EmployeeRepository;
import com.home.repository.EmailsRepository;
import com.home.repository.VendorRepository;

@CrossOrigin
@RestController
public class CredController {

	@Autowired
	EmployeeRepository employeeRepo;
	
	@Autowired
	VendorRepository vendorRepo;
	
	@Autowired
	EmailsRepository emailsRepo;
	
	@GetMapping
	String helloCred() {
		return "Hello world!";
	}
	
	@GetMapping("/employees")
	List<Employee> getEmployees(){
		List<Employee> emps = employeeRepo.findAll();
		System.out.println(emps);
		return emps;
	}
	
	@GetMapping("/vendors")
	List<Vendor> getVendors(){
		return vendorRepo.findAll();
	}
	
	@PostMapping("/employees")
	Employee createEmployee(@RequestBody Employee employee) {
		System.out.println(employee);
		return employeeRepo.save(employee);
	}
	
	@PostMapping("/vendors")
	Vendor createVendor(@RequestBody Vendor vendor) {
		System.out.println(vendor);
		return vendorRepo.save(vendor);
	}
	
	@PostMapping("/sendMailToVendors")
	List<String> sendMailToVendors(@RequestBody List<Integer> vendorIds) {
		List<Vendor> vendors = getVendors().stream().filter(v -> vendorIds.contains(v.getId())).toList();
		List<String> mails = new ArrayList<>();
		vendors.forEach(v -> {
			mails.add("Sending payments to vendor " + v.getName() + " at upi " + v.getUpi());
		});
		System.out.println(mails);
		
		
		emailsRepo.save(new Emails(mails));
		return mails;
	}
	
	@GetMapping("/emails")
	List<Emails> getEmailsSent(){
		return emailsRepo.findAll();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
