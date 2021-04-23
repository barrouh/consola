package com.consola.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Vacation", catalog = "consola")
public class Vacation implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private int id;
	private Employee employee;
	private Date requestDate;
	private Date startDate;
	private Date endDate;
	private float duration;
	private String comment;
	private Set<Notification> notifications = new HashSet<>(0);
	private Set<VacationStatusVacation> vacationStatusVacations = new HashSet<>(0);

	@Id
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "employeeId", nullable = false)
	public Employee getEmployee() {
		return this.employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "requestDate", nullable = false, length = 10)
	public Date getRequestDate() {
		return this.requestDate;
	}

	public void setRequestDate(Date requestDate) {
		this.requestDate = requestDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "startDate", nullable = false, length = 10)
	public Date getStartDate() {
		return this.startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "endDate", nullable = false, length = 10)
	public Date getEndDate() {
		return this.endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	@Column(name = "duration", nullable = false, precision = 12, scale = 0)
	public float getDuration() {
		return this.duration;
	}

	public void setDuration(float duration) {
		this.duration = duration;
	}

	@Column(name = "comment", length = 300)
	public String getComment() {
		return this.comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "vacation")
	public Set<Notification> getNotifications() {
		return this.notifications;
	}

	public void setNotifications(Set<Notification> notifications) {
		this.notifications = notifications;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "vacation")
	public Set<VacationStatusVacation> getVacationStatusVacations() {
		return this.vacationStatusVacations;
	}

	public void setVacationStatusVacations(Set<VacationStatusVacation> vacationStatusVacations) {
		this.vacationStatusVacations = vacationStatusVacations;
	}

}