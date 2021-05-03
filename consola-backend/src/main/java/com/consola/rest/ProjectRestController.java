package com.consola.rest;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.consola.dto.ProjectDTO;
import com.consola.model.Project;
import com.consola.repositories.ProjectRepository;


@RestController
@RequestMapping("/api/projects")
public class ProjectRestController {

	@Autowired
	private ProjectRepository projectRepository;

	private ModelMapper mapper = new ModelMapper();

	@GetMapping("")
	public ResponseEntity<Page<Project>> projects(
			@RequestParam(name = "pageSize", defaultValue = "10", required = false) Integer pageSize,
			@RequestParam(name = "pageIndex", defaultValue = "0", required = false) Integer pageIndex) {
		return new ResponseEntity<Page<Project>>(projectRepository.findAll(PageRequest.of(pageIndex, pageSize)), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public Optional<Project> projectById(@PathVariable("id") int id) {
		return projectRepository.findById(id);
	}

	@PostMapping("/save")
	public Project saveProject(@RequestBody ProjectDTO project) {
		return projectRepository.saveAndFlush(mapper.map(project, Project.class));
	}

	@DeleteMapping("/{id}")
	public void deleteProjectById(@PathVariable("id") int id) {
		projectRepository.deleteById(id);
	}

}