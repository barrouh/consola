package com.consola.model;

import java.util.Date;
import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Vacation_Status_Vacation", catalog = "consola")
public class VacationStatusVacation implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private VacationStatusVacationId id;
	private Vacation vacation;
	private VacationStatus vacationStatus;
	private Date date;

	public VacationStatusVacation() {
	}

	@EmbeddedId
	@AttributeOverrides({
			@AttributeOverride(name = "vacationStatusId", column = @Column(name = "vacation_statusId", nullable = false)),
			@AttributeOverride(name = "vacationId", column = @Column(name = "vacationId", nullable = false)) })
	public VacationStatusVacationId getId() {
		return this.id;
	}

	public void setId(VacationStatusVacationId id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "vacationId", nullable = false, insertable = false, updatable = false)
	public Vacation getVacation() {
		return this.vacation;
	}

	public void setVacation(Vacation vacation) {
		this.vacation = vacation;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "vacation_statusId", nullable = false, insertable = false, updatable = false)
	public VacationStatus getVacationStatus() {
		return this.vacationStatus;
	}

	public void setVacationStatus(VacationStatus vacationStatus) {
		this.vacationStatus = vacationStatus;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "date", nullable = false, length = 10)
	public Date getDate() {
		return this.date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

}