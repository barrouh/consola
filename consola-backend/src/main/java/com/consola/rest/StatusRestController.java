package com.consola.rest;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.consola.dto.StatusDTO;
import com.consola.model.Status;
import com.consola.repositories.StatusRepository;

@RestController
@RequestMapping("/api/status")
public class StatusRestController {

	@Autowired
	private StatusRepository statusRepository;
	
	private ModelMapper mapper = new ModelMapper();

	@GetMapping("")
	public List<Status> status() {
		return statusRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Status> statusById(@PathVariable("id") int id) {
		return statusRepository.findById(id);
	}
	
	@GetMapping("/save")
	public Status addStatus(@RequestBody StatusDTO status) {
		return statusRepository.saveAndFlush(mapper.map(status, Status.class));
	}

}