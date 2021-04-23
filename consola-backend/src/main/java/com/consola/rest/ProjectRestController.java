package com.consola.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.consola.model.Project;
import com.consola.repositories.ProjectRepository;

@RestController
@RequestMapping("/rest-api/project/")
public class ProjectRestController {

	@Autowired
	private ProjectRepository projectRepository;

	@GetMapping("all")
	public List<Project> projects() {
		return projectRepository.findAll();
	}

}