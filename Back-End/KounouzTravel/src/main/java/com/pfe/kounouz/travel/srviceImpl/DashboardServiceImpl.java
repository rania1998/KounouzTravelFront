package com.pfe.kounouz.travel.srviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.kounouz.travel.entitie.Dashboard;
import com.pfe.kounouz.travel.repository.DashboardRepository;
import com.pfe.kounouz.travel.service.DashboardService;

@Service
public class DashboardServiceImpl implements DashboardService{
	
	@Autowired
	private DashboardRepository DashboardRepository;

	
	public void deleteDashboard(Dashboard Dashboard) {
		DashboardRepository.delete(Dashboard);
	}

	
	public List<Dashboard> findAllDashboard() {
		// TODO Auto-generated method stub
		return  DashboardRepository.findAll();
	}

	
	public Dashboard findOneDashboard(Long id) {
		// TODO Auto-generated method stub
		return DashboardRepository.findDashboardById(id);
	}


	public Dashboard saveDashboard(Dashboard Dashboard) {
		// TODO Auto-generated method stub
		return DashboardRepository.save(Dashboard);
	}

}
