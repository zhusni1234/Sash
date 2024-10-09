package com.example;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.web.util.UriComponentsBuilder;

import java.nio.file.Files;
import java.util.HashMap;
import java.util.Map;

@Service
public class SaveItemsManager {

    @Value("${api.base.url}")
    private String API_BASE_URL;

    private final RestTemplate restTemplate;

    public SaveItemsManager(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String addDriverSave(String email, String password, String firstName, String lastName, String phone, String address, String dob,
                                MultipartFile image, String tfn, String abn, boolean isHourly, String cPercentage, String hRate) throws Exception {

        String token = getToken(); // Retrieve token from a secure source
        HttpHeaders headers = createHeaders(token);
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        Map<String, Object> body = new HashMap<>();
        body.put("email", email);
        body.put("password", password);
        body.put("first_name", firstName);
        body.put("last_name", lastName);
        body.put("phone", phone);
        body.put("address", address);
        body.put("dob", dob);
        body.put("tfn", tfn);
        body.put("abn", abn);
        body.put("isHourly", isHourly);
        body.put("cPercentage", cPercentage);
        body.put("hRate", hRate);

        if (image != null && !image.isEmpty()) {
            ByteArrayResource imageResource = new ByteArrayResource(image.getBytes()) {
                @Override
                public String getFilename() {
                    return image.getOriginalFilename();
                }
            };
            body.put("image", imageResource);
        }

        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        String url = UriComponentsBuilder.fromHttpUrl(API_BASE_URL + "/add_driver/")
                .toUriString();

        ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);
        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            throw new Exception("Error occurred: " + response.getStatusCode());
        }
    }

    public String addTransSave(MultipartFile file, String code) throws Exception {

        String token = getToken(); // Retrieve token from a secure source
        HttpHeaders headers = createHeaders(token);
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        Map<String, Object> body = new HashMap<>();
        body.put("code", code);

        if (file != null && !file.isEmpty()) {
            ByteArrayResource fileResource = new ByteArrayResource(file.getBytes()) {
                @Override
                public String getFilename() {
                    return file.getOriginalFilename();
                }
            };
            body.put("file", fileResource);
        }

        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        String url = UriComponentsBuilder.fromHttpUrl(API_BASE_URL + "/add_transactions_manager/")
                .toUriString();

        ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);
        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            throw new Exception("Error occurred: " + response.getStatusCode());
        }
    }

    public String addSuburbSave(String name, String fee) throws Exception {

        String token = getToken(); // Retrieve token from a secure source
        HttpHeaders headers = createHeaders(token);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        Map<String, Object> body = new HashMap<>();
        body.put("name", name);
        body.put("fee", fee);

        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        String url = UriComponentsBuilder.fromHttpUrl(API_BASE_URL + "/add_suburb_manager/")
                .toUriString();

        ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);
        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            throw new Exception("Error occurred: " + response.getStatusCode());
        }
    }

    private HttpHeaders createHeaders(String token) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        return headers;
    }

    private String getToken() {
        // Implement token retrieval logic
        return "your-jwt-token";
    }
}
