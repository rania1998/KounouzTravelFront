package com.pfe.kounouz.travel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pfe.kounouz.travel.entitie.Commentaire;

@Repository
public interface CommentaireRepository extends JpaRepository<Commentaire, Long> {

	Commentaire findCommentaireById(long id);

}
