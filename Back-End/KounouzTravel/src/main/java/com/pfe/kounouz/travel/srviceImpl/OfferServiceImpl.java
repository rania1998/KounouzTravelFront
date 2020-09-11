package com.pfe.kounouz.travel.srviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.kounouz.travel.entitie.Offer;
import com.pfe.kounouz.travel.service.OfferService;
import com.pfe.kounouz.travel.repository.OfferRepository;

@Service
public class OfferServiceImpl implements OfferService {

	@Autowired
	OfferRepository OfferRepository;

	
	public Offer findOneOffer(Long id) {
		// TODO Auto-generated method stub
		return OfferRepository.findOfferById(id);
	}

	
	public List<Offer> findAllOffer() {
		// TODO Auto-generated method stub
		return OfferRepository.findAll();
	}

	
	public Offer saveOffer(Offer Offer) {
		// TODO Auto-generated method stub
		return OfferRepository.save(Offer);
	}

	
	public void deleteOffer(Offer Offer) {
		OfferRepository.delete(Offer);

	}

}
