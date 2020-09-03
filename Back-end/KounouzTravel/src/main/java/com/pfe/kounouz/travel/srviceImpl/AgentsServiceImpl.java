package com.pfe.kounouz.travel.srviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.kounouz.travel.entitie.Agents;
import com.pfe.kounouz.travel.repository.AgentsRepository;
import com.pfe.kounouz.travel.service.AgentsService;

@Service
public class AgentsServiceImpl implements AgentsService{
	
	@Autowired
	AgentsRepository AgentsRepository;

	public Agents findOneAgents(Long id) {
		return AgentsRepository.findOneAgentById(id);
	}


	public List<Agents> findAllAgents() {
		return AgentsRepository.findAll();
	}

	
	public Agents saveAgents(Agents agents) {
		return AgentsRepository.save(agents);
	}

	
	public void deleteAgents(Agents agents) {
		AgentsRepository.delete(agents);
	}
}
