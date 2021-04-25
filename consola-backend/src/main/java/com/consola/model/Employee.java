package com.consola.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Employee", catalog = "consola")
public class Employee implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private String username;
	private Employee employee;
	private Role role;
	private String password;
	private String fullName;
	private String email;
	private Date joinDate;
	private Date leaveDate;
	private float initialBalance;
	private float currentBalance;
	private Set<Employee> employees = new HashSet<>(0);
	private Set<Vacation> vacations = new HashSet<>(0);
	private Set<Project> projects = new HashSet<>(0);

	@Id
	@Column(name = "username", unique = true, nullable = false)
	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "responsible")
	public Employee getEmployee() {
		return this.employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "roleId")
	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Column(name = "password", nullable = false)
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "fullName", nullable = false)
	public String getFullName() {
		return this.fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	@Column(name = "email", nullable = false)
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "joinDate", nullable = false, length = 10)
	public Date getJoinDate() {
		return this.joinDate;
	}

	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "leaveDate", length = 10)
	public Date getLeaveDate() {
		return this.leaveDate;
	}

	public void setLeaveDate(Date leaveDate) {
		this.leaveDate = leaveDate;
	}

	@Column(name = "initialBalance", nullable = false, precision = 12, scale = 0)
	public float getInitialBalance() {
		return this.initialBalance;
	}

	public void setInitialBalance(float initialBalance) {
		this.initialBalance = initialBalance;
	}

	@Column(name = "currentBalance", nullable = false, precision = 12, scale = 0)
	public float getCurrentBalance() {
		return this.currentBalance;
	}

	public void setCurrentBalance(float currentBalance) {
		this.currentBalance = currentBalance;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "employee")
	public Set<Employee> getEmployees() {
		return this.employees;
	}

	public void setEmployees(Set<Employee> employees) {
		this.employees = employees;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "employee")
	public Set<Vacation> getVacations() {
		return this.vacations;
	}

	public void setVacations(Set<Vacation> vacations) {
		this.vacations = vacations;
	}

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "Project_Employee", catalog = "consola", joinColumns = {
			@JoinColumn(name = "employeeId", nullable = false, updatable = false) }, inverseJoinColumns = {
					@JoinColumn(name = "projectId", nullable = false, updatable = false) })
	public Set<Project> getProjects() {
		return this.projects;
	}

	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}

}