package com.consola.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class VacationStatusVacationId implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private int vacationStatusId;
	private int vacationId;

	public VacationStatusVacationId() {
	}

	public VacationStatusVacationId(int vacationStatusId, int vacationId) {
		this.vacationStatusId = vacationStatusId;
		this.vacationId = vacationId;
	}

	@Column(name = "vacation_statusId", nullable = false)
	public int getVacationStatusId() {
		return this.vacationStatusId;
	}

	public void setVacationStatusId(int vacationStatusId) {
		this.vacationStatusId = vacationStatusId;
	}

	@Column(name = "vacationId", nullable = false)
	public int getVacationId() {
		return this.vacationId;
	}

	public void setVacationId(int vacationId) {
		this.vacationId = vacationId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof VacationStatusVacationId))
			return false;
		VacationStatusVacationId castOther = (VacationStatusVacationId) other;

		return (this.getVacationStatusId() == castOther.getVacationStatusId())
				&& (this.getVacationId() == castOther.getVacationId());
	}

}