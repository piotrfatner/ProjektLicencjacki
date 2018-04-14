package com;

import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

public class MvcConfig {
    @Bean(name = "dataSource")
    public DriverManagerDataSource dataSource() {
        DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource();
        driverManagerDataSource.setDriverClassName("com.mysql.jdbc.Driver");
        driverManagerDataSource.setUrl("jdbc:mysql://localhost:3306/clinicdb");
        driverManagerDataSource.setUsername("clinicUser");
        driverManagerDataSource.setPassword("clinic123");
        return driverManagerDataSource;
    }
}
