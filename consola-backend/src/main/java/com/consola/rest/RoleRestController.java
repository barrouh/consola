package com.consola.rest;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.consola.dto.RoleDTO;
import com.consola.model.Role;
import com.consola.repositories.RoleRepository;

@RestController
@RequestMapping("/api/roles")
public class RoleRestController {

	@Autowired
	private RoleRepository roleRepository;

	private ModelMapper mapper = new ModelMapper();

	@GetMapping("")
	public List<Role> roles() {
		return roleRepository.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Role> roleById(@PathVariable("id") int id) {
		return roleRepository.findById(id);
	}

	@PostMapping("/save")
	public Role saveRole(@RequestBody RoleDTO role) {
		return roleRepository.saveAndFlush(mapper.map(role, Role.class));
	}

	@DeleteMapping("/{id}")
	public void deleteRoleById(@PathVariable("id") int id) {
		roleRepository.deleteById(id);
	}

}