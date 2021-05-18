package com.consola.model;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Vacation_Status", catalog = "consola")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class VacationStatus implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private int id;
	private String name;
	private Set<VacationStatusVacation> vacationStatusVacations = new HashSet<>(0);

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "name", nullable = false)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "vacationStatus")
	public Set<VacationStatusVacation> getVacationStatusVacations() {
		return this.vacationStatusVacations;
	}

	public void setVacationStatusVacations(Set<VacationStatusVacation> vacationStatusVacations) {
		this.vacationStatusVacations = vacationStatusVacations;
	}

}