package com.pfe.kounouz.travel.entitie;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "description")
	 private String description;
	
	@Column(name = "name")
	 private String name;
	
	@Column(name = "travel")
	 private String travel;
	
	@Column(name = "accommondation")
	 private String  accommondation;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "categoryId")
	@JsonIgnore
	private List<UnderCategory> underCategory ;
}
