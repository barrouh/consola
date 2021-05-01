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

import com.consola.dto.VacationDTO;
import com.consola.model.Vacation;
import com.consola.repositories.VacationRepository;

@RestController
@RequestMapping("/api/vacations")
public class VacationRestController {

	@Autowired
	private VacationRepository vacationRepository;

	private ModelMapper mapper = new ModelMapper();

	@GetMapping("")
	public List<Vacation> vacations() {
		return vacationRepository.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Vacation> vacationById(@PathVariable("id") int id) {
		return vacationRepository.findById(id);
	}

	@PostMapping("/save")
	public Vacation saveVacation(@RequestBody VacationDTO vacation) {
		return vacationRepository.saveAndFlush(mapper.map(vacation, Vacation.class));
	}

	@DeleteMapping("/{id}")
	public void deleteVacationById(@PathVariable("id") int id) {
		vacationRepository.deleteById(id);
	}

}